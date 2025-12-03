type TimeRangeInputsProps = {
  startTime: string;
  endTime: string;
  onChangeStart: (value: string) => void;
  onChangeEnd: (value: string) => void;
};

const TimeRangeInputs = ({
  startTime,
  endTime,
  onChangeStart,
  onChangeEnd,
}: TimeRangeInputsProps) => {
  // heures de 09:00 à 18:00
  const hours: string[] = [];
  for (let h = 9; h <= 18; h++) {
    hours.push(`${h.toString().padStart(2, '0')}:00`);
  }

  // heures de fin filtrées (uniquement > startTime)
  const filteredEndHours = startTime
    ? hours.filter((hour) => {
        const [sh] = startTime.split(':').map(Number);
        const [eh] = hour.split(':').map(Number);
        return eh > sh; // heure de fin strictement supérieure
      })
    : hours; // si aucune heure de début → afficher toutes les heures

  // si l'heure de fin choisie n'est plus valide → reset
  if (endTime && !filteredEndHours.includes(endTime)) {
    onChangeEnd('');
  }

  return (
    <div className="booked-time-inputs">
      <div className="booked-time-field">
        <label htmlFor="startTime">Heure de début</label>
        <select
          id="startTime"
          value={startTime}
          onChange={(e) => onChangeStart(e.target.value)}
        >
          <option value="">Sélectionner</option>
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>

      <div className="booked-time-field">
        <label htmlFor="endTime">Heure de fin</label>
        <select
          id="endTime"
          value={endTime}
          onChange={(e) => onChangeEnd(e.target.value)}
          disabled={!startTime}
        >
          <option value="">Sélectionner</option>
          {filteredEndHours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimeRangeInputs;
