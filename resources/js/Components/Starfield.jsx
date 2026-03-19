/**
 * Deterministic star positions (stable SSR / hydration).
 * Parent should wrap with `hidden dark:block` so this only shows in dark mode.
 */
const STAR_COUNT = 72;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
    const n = i + 1;
    return {
        id: i,
        left: ((n * 37 + n * n * 3) % 100) + (i % 7) * 0.3,
        size: 1 + (i % 3),
        duration: 38 + (i % 52),
        delay: -(i % 48),
        driftX: ((i * 13) % 70) - 35,
        opacity: 0.35 + ((i * 7) % 50) / 100,
    };
});

export default function Starfield() {
    return (
        <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute inset-0 bg-slate-900/95" />
            <div className="absolute inset-0">
                {stars.map((s) => (
                    <span
                        key={s.id}
                        className="star-run absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.55)]"
                        style={{
                            left: `${s.left}%`,
                            bottom: '-4%',
                            width: s.size,
                            height: s.size,
                            opacity: s.opacity,
                            '--star-dx': `${s.driftX}px`,
                            '--star-op': String(s.opacity),
                            animationDuration: `${s.duration}s`,
                            animationDelay: `${s.delay}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
