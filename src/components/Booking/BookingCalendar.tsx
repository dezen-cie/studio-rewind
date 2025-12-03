import { useEffect, useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import './BookingCalendar.css';

const daysLabels: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

type Day = number | null;
type Week = Day[];
type DaysMatrix = Week[];

type BookingCalendarProps = {
  value: Date | null;
  onChange: (date: Date) => void;
};

function getDaysMatrix(year: number, month: number): DaysMatrix {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  let startDay = firstDay.getDay();
  startDay = (startDay + 6) % 7;

  const weeks: DaysMatrix = [];
  let currentDay = 1 - startDay;

  while (currentDay <= daysInMonth) {
    const week: Week = [];
    for (let i = 0; i < 7; i++) {
      if (currentDay < 1 || currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(currentDay);
      }
      currentDay++;
    }
    weeks.push(week);
  }

  return weeks;
}

function formatMonthYear(date: Date): string {
  const month = date.toLocaleString('fr-FR', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

const BookingCalendar = ({ value, onChange }: BookingCalendarProps) => {
  // le mois affiché, basé sur la valeur si dispo
  const [currentDate, setCurrentDate] = useState<Date>(() => value ?? new Date());

  // si la valeur change (ex : retour step 3 -> 2), on recale le mois affiché
  useEffect(() => {
    if (value) {
      setCurrentDate(
        (_prev) =>
          new Date(
            value.getFullYear(),
            value.getMonth(),
            1
          )
      );
    }
  }, [value]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const weeks = getDaysMatrix(year, month);

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const handleSelectDay = (day: Day) => {
    if (!day) return;
    const newDate = new Date(year, month, day);
    onChange(newDate);
  };

  const isSelected = (day: Day): boolean => {
    if (!value || !day) return false;
    return (
      value.getFullYear() === year &&
      value.getMonth() === month &&
      value.getDate() === day
    );
  };

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <div className="calendar-title">
          <CalendarIcon size={18} />
          <span>Date du tournage</span>
        </div>
        {value && (
          <span className="calendar-selected-info">
            {value.toLocaleDateString('fr-FR')}
          </span>
        )}
      </div>

      <div className="calendar-month-nav">
        <button type="button" onClick={handlePrevMonth}>
          <ChevronLeft size={18} />
        </button>
        <span className="calendar-month-label">
          {formatMonthYear(currentDate)}
        </span>
        <button type="button" onClick={handleNextMonth}>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-row calendar-row-labels">
          {daysLabels.map((label) => (
            <div key={label} className="calendar-cell calendar-cell-label">
              {label}
            </div>
          ))}
        </div>

        {weeks.map((week: Week, weekIndex: number) => (
          <div key={weekIndex} className="calendar-row">
            {week.map((day: Day, dayIndex: number) => (
              <button
                key={dayIndex}
                type="button"
                className={
                  'calendar-cell calendar-cell-day' +
                  (day ? '' : ' calendar-cell-empty') +
                  (isSelected(day) ? ' calendar-cell-selected' : '')
                }
                onClick={() => handleSelectDay(day)}
                disabled={!day}
              >
                {day ?? ''}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCalendar;
