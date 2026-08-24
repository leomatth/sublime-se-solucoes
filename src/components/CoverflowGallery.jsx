import { useState, useEffect, useCallback, useRef } from 'react'

// ─── constants ───────────────────────────────────────────────────────────────
const PERSPECTIVE = 1600
const SCALE_STEP  = 0.16
const MAX_VISIBLE = 2
const DEPTH       = 240

function cssTransition(t) {
  const dur = t && typeof t.duration === 'number' ? t.duration : 0.6
  let ease = 'cubic-bezier(0.22, 1, 0.36, 1)'
  const e = t?.ease
  if (Array.isArray(e) && e.length === 4) {
    ease = `cubic-bezier(${e[0]},${e[1]},${e[2]},${e[3]})`
  } else if (typeof e === 'string') {
    const map = { linear: 'linear', easeIn: 'ease-in', easeOut: 'ease-out', easeInOut: 'ease-in-out' }
    ease = map[e] ?? 'ease'
  }
  return { dur, ease }
}

// ─── component ───────────────────────────────────────────────────────────────
/**
 * CoverflowGallery
 *
 * Props:
 *  slides          – array of { image:{src,alt}, title, category, color, gradient }
 *  cardWidth       – px (default 380)
 *  cardHeight      – px (default 260)
 *  radius          – 0-20 rounded scale (default 3)
 *  tilt            – Y-axis tilt on neighbours (default 12)
 *  sideTilt        – Z-axis tilt on neighbours (default 8)
 *  gap             – spacing factor (default 8)
 *  opacity         – brightness of inactive cards 0-100 (default 60)
 *  transition      – { duration, ease } object
 *  onActiveChange  – callback(index) when active slide changes
 *  initialActive   – starting index (default 0)
 */
export default function CoverflowGallery({
  slides = [],
  cardWidth     = 380,
  cardHeight    = 260,
  radius        = 3,
  tilt          = 12,
  sideTilt      = 8,
  gap           = 8,
  opacity       = 60,
  transition    = { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  onActiveChange,
  initialActive = 0,
}) {
  const n = slides.length
  const [active, setActive] = useState(initialActive)
  const lockRef      = useRef(false)
  const touchStartX  = useRef(0)

  const moveDur = transition?.duration ?? 0.6

  const lock = useCallback(() => {
    lockRef.current = true
    window.setTimeout(() => { lockRef.current = false }, Math.max(50, moveDur * 1000))
  }, [moveDur])

  const step = useCallback((dir) => {
    if (lockRef.current) return
    lock()
    setActive(a => (((a + dir) % n) + n) % n)
  }, [n, lock])

  const handleCardClick = useCallback((i) => {
    if (lockRef.current) return
    lock()
    setActive(a => (i === a ? (a + 1) % n : i))
  }, [n, lock])

  useEffect(() => { onActiveChange?.(active) }, [active, onActiveChange])

  const onKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1) }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); step(-1) }
  }, [step])

  const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX }
  const handleTouchEnd   = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX
    if (Math.abs(diff) > 40) step(diff > 0 ? 1 : -1)
  }

  const { dur, ease } = cssTransition(transition)
  const transitionCss    = `transform ${dur}s ${ease}, opacity ${dur}s ${ease}`
  const effectiveRadius  = (Math.max(0, Math.min(20, radius)) / 20) * (Math.min(cardWidth, cardHeight) / 2)
  const dim              = 1 - Math.max(0, Math.min(100, opacity)) / 100

  return (
    <div
      style={{
        position:        'relative',
        width:           '100%',
        height:          cardHeight + 48,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        perspective:     `${PERSPECTIVE}px`,
        overflow:        'hidden',
        outline:         'none',
      }}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Galeria de projectos"
      onKeyDown={onKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── stage ── */}
      <div style={{ position: 'relative', width: cardWidth, height: cardHeight, transformStyle: 'preserve-3d' }}>
        {slides.map((slide, i) => {
          let rel = i - active
          if (rel >  n / 2) rel -= n
          if (rel < -n / 2) rel += n

          const ax       = Math.abs(rel)
          const visible  = ax <= MAX_VISIBLE
          const isActive = rel === 0
          const sc       = Math.max(0.4, 1 - ax * SCALE_STEP)
          const tx       = rel * (gap * 30)
          const tz       = -ax * DEPTH
          const ry       = -rel * tilt
          const rz       = rel * sideTilt
          const src      = slide.image?.src ?? ''

          return (
            <div
              key={i}
              onClick={() => handleCardClick(i)}
              aria-label={slide.title}
              aria-hidden={!visible}
              style={{
                position:        'absolute',
                left:            '50%',
                top:             '50%',
                width:           cardWidth,
                height:          cardHeight,
                borderRadius:    effectiveRadius,
                overflow:        'hidden',
                transformStyle:  'preserve-3d',
                transformOrigin: 'center center',
                transform:       `translate(-50%,-50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
                transition:      transitionCss,
                opacity:         visible ? 1 : 0,
                cursor:          isActive ? 'default' : 'pointer',
                pointerEvents:   visible ? 'auto' : 'none',
                background:      slide.gradient ?? '#16161f',
              }}
            >
              {/* image */}
              {src && (
                <img
                  src={src}
                  alt={slide.image?.alt ?? slide.title ?? ''}
                  draggable={false}
                  loading="lazy"
                  style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block', userSelect:'none' }}
                />
              )}

              {/* bottom gradient + card info */}
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.9) 100%)', pointerEvents:'none' }} />
              <div style={{ position:'absolute', bottom:20, left:22, right:22, pointerEvents:'none' }}>
                <div style={{ fontSize:10, color: slide.color ?? '#818cf8', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:5 }}>
                  {slide.category}
                </div>
                <div style={{ fontSize:17, fontWeight:700, color:'#fff', letterSpacing:'-0.01em', lineHeight:1.25 }}>
                  {slide.title}
                </div>
              </div>

              {/* dim overlay for inactive cards */}
              <div style={{ position:'absolute', inset:0, background:'#000', opacity: isActive ? 0 : dim, transition:`opacity ${dur}s ${ease}`, pointerEvents:'none' }} />

              {/* active ring */}
              {isActive && (
                <div style={{
                  position:'absolute', inset:0, borderRadius: effectiveRadius,
                  boxShadow:`0 0 0 2px rgba(99,102,241,0.6), 0 20px 60px rgba(0,0,0,0.6)`,
                  pointerEvents:'none', transition:`opacity ${dur}s ${ease}`
                }} />
              )}
            </div>
          )
        })}
      </div>

      {/* ── dot navigation ── */}
      <div
        style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', display:'flex', gap:6, alignItems:'center' }}
        role="tablist"
        aria-label="Navegar entre projectos"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Projecto ${i + 1}: ${slides[i].title}`}
            onClick={() => { if (!lockRef.current) { lock(); setActive(i) } }}
            style={{
              width:      i === active ? 22 : 6,
              height:     6,
              borderRadius: 3,
              background: i === active ? '#6366f1' : 'rgba(255,255,255,0.18)',
              border:     'none',
              cursor:     'pointer',
              padding:    0,
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
