import PropTypes from 'prop-types';
import useCountdown from '../hooks/useCountdown.js';

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Mins' },
  { key: 'seconds', label: 'Secs' },
];

const pad = (value) => String(value).padStart(2, '0');

export default function CountdownTimer({ target }) {
  const units = useCountdown(target);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="text-[10px] tracking-[0.3em] text-ink/50 uppercase">Drop ends in</span>
      <div className="flex items-center gap-2">
        {UNITS.map((unit) => (
          <div key={unit.key} className="flex flex-col items-center justify-center min-w-[3.5rem] rounded-lg border border-acid/25 bg-acid/5 px-2.5 py-2">
            <span className="font-display text-xl md:text-2xl text-acid tabular-nums">{pad(units[unit.key])}</span>
            <span className="text-[9px] tracking-[0.2em] text-ink/50 mt-0.5 uppercase">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

CountdownTimer.propTypes = {
  target: PropTypes.number.isRequired,
};