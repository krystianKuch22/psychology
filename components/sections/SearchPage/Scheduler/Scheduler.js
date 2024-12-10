import { StyledScheduler } from "./Scheduler.styles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Scheduler() {
  const events = [
    {
      title: "Spotkanie z klientem",
      start: "2024-11-15T10:00:00",
      end: "2024-11-15T11:00:00",
    },
    {
      title: "Wizyta u lekarza",
      start: "2024-11-16T14:00:00",
      end: "2024-11-16T15:00:00",
    },
    { title: "Webinar React.js", start: "2024-11-17", allDay: true },
  ];

  // Godziny pracy dla każdego dnia
  const workingHours = [
    { day: 1, start: 12, end: 18 }, // Poniedziałek (10:00 - 18:00)
    { day: 2, start: 10, end: 12 }, // Wtorek
    { day: 3, start: 9, end: 11 }, // Środa (9:00 - 17:00)
    { day: 4, start: 11, end: 16 }, // Czwartek (8:00 - 16:00)
    { day: 5, start: 11, end: 13 }, // Piątek (11:00 - 19:00)
  ];

  const workHours = {
    1: { start: 10, end: 15 }, // Poniedziałek (9:00 - 17:00)
    2: { start: 10, end: 15 }, // Wtorek (10:00 - 18:00)
    3: { start: 10, end: 16 }, // Środa (8:00 - 16:00)
    4: { start: 11, end: 15 }, // Czwartek (11:00 - 19:00)
    5: { start: 10, end: 12 }, // Piątek (9:00 - 15:00)
    6: { start: 0, end: 0 }, // Sobota (niedostępne)
    0: { start: 0, end: 0 }, // Niedziela (niedostępne)
  };

  // Funkcja generująca przyciski dla dostępnych godzin
  const generateHourlyButtons = (date, dayNumber) => {
    const hours = workingHours.find((item) => item.day === dayNumber);
    if (!hours) return null;

    const buttons = [];
    for (let hour = hours.start; hour < hours.end; hour++) {
      buttons.push(
        <button
          key={hour}
          // style={{
          //   display: "block",
          //   width: "100%",
          //   backgroundColor: "#007bff",
          //   color: "white",
          //   border: "none",
          //   padding: "5px",
          //   marginBottom: "5px",
          //   cursor: "pointer",
          // }}
          onClick={() =>
            alert(
              `Wybrano godzinę: ${hour}:00 w dniu ${date.toLocaleDateString()}`
            )
          }
        >
          {hour}:00
        </button>
      );
    }
    return buttons;
  };

  const generateCellsContent = (info) => {
    const hour = info.date.getHours(); // Pobranie godziny
    const day = info.date.getDay(); // Pobranie dnia tygodnia (0 = Niedziela, 1 = Poniedziałek, itd.)
    const workStart = workHours[day]?.start || 0; // Początek godzin pracy
    const workEnd = workHours[day]?.end || 0; // Koniec godzin pracy
    const isAvailable = hour >= workStart && hour < workEnd; // Sprawdzenie dostępności

    console.log(workStart);

    return isAvailable ? (
      <button
        style={{
          width: "100%",
          padding: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => alert(`Wybrano godzinę: ${hour}:00`)}
      >
        {hour}:00
      </button>
    ) : (
      <div style={{ textAlign: "center", color: "gray" }}>-</div>
    );
  };

  return (
    <StyledScheduler>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        firstDay={new Date().getDay()}
        headerToolbar={{
          left: "prev",
          right: "next",
          center: "title",
        }}
        height="100%"
        events={events}
        editable={true}
        selectable={true}
        dateClick={(info) => alert(`Kliknięto datę: ${info.dateStr}`)}
        eventClick={(info) =>
          alert(`Kliknięto wydarzenie: ${info.event.title}`)
        }
        dayHeaderContent={(info) => {
          // info.date zawiera datę danego nagłówka

          let dayName;

          if (info.date.getUTCDate() + 1 === new Date().getUTCDate()) {
            dayName = "Dziś";
          } else if (
            info.date.getUTCDate() + 1 ===
            new Date().getUTCDate() + 1
          ) {
            dayName = "Jutro";
          } else {
            dayName = info.date.toLocaleDateString("pl-PL", {
              weekday: "long",
            }); // Nazwa dnia
          }
          console.log(info.date.getUTCDate() + " " + new Date().getUTCDate());
          const dayNumber =
            info.date.getDate() +
            " " +
            info.date.toLocaleDateString("pl-PL", {
              month: "short",
            }); // Numer dnia

          return (
            <div>
              <strong>{dayName}</strong> <br />
              <span>{dayNumber}</span>
            </div>
          );
        }}
        slotMinTime="10:00:00"
        slotMaxTime="16:00:00"
        // businessHours={{
        //   daysOfWeek: [1, 2, 3, 4, 5], // Dni tygodnia (poniedziałek-piątek)
        //   startTime: "10:00", // Początek dnia pracy
        //   endTime: "17:00", // Koniec dnia pracy
        // }}
        slotLabelContent={
          // (info) => {
          //   const hour = info.date.getHours(); // Pobranie godziny
          //   const day = info.date.getDay(); // Pobranie dnia tygodnia (0 = Niedziela, 1 = Poniedziałek, itd.)
          //   const workStart = workHours[day]?.start || 0; // Początek godzin pracy
          //   const workEnd = workHours[day]?.end || 0; // Koniec godzin pracy
          //   const isAvailable = hour >= workStart && hour < workEnd; // Sprawdzenie dostępności

          //   return isAvailable ? (
          //     <button
          //       style={{
          //         width: "100%",
          //         padding: "5px",
          //         backgroundColor: "#007bff",
          //         color: "white",
          //         border: "none",
          //         borderRadius: "4px",
          //         cursor: "pointer",
          //       }}
          //       onClick={() => alert(`Wybrano godzinę: ${hour}:00`)}
          //     >
          //       {hour}:00
          //     </button>
          //   ) : (
          //     <div style={{ textAlign: "center", color: "gray" }}>-</div>
          //   );
          // }
          (info) => (
            <div>{info.date.getHours()}:00</div> // Wyświetlenie godzin na osi czasu
          )
        }
        dayCellContent={(info) => {
          const day = info.date.getDay(); // Pobranie dnia tygodnia
          const hours = workHours[day]; // Godziny pracy dla danego dnia

          // if (!hours || (hours.start === 0 && hours.end === 0)) {
          //   return (
          //     <div style={{ textAlign: "center", color: "gray" }}>
          //       Niedostępne
          //     </div>
          //   );
          // }

          // Generowanie przycisków i myślników dla każdej godziny
          const hourButtons = [];
          for (let hour = 10; hour < 17; hour++) {
            const isAvailable = hour >= hours.start && hour < hours.end;
            hourButtons.push(
              isAvailable ? (
                <button
                  key={hour}
                  // style={{
                  //   display: "block",
                  //   width: "100%",
                  //   backgroundColor: "#007bff",
                  //   color: "white",
                  //   border: "none",
                  //   borderRadius: "4px",
                  //   cursor: "pointer",
                  //   marginBottom: "2px",
                  // }}
                  onClick={() =>
                    alert(
                      `Wybrano godzinę: ${hour}:00 w dniu ${info.date.toLocaleDateString()}`
                    )
                  }
                >
                  {hour}:00
                </button>
              ) : (
                <div
                  key={hour}
                  className="unavailable"
                  // style={{
                  //   textAlign: "center",
                  //   color: "gray",
                  //   marginBottom: "2px",
                  // }}
                >
                  -
                </div>
              )
            );
          }

          return <div>{hourButtons}</div>;
        }}
        // dayCellContent={(info) => {
        //   const hour = info.date.getHours(); // Pobranie godziny
        //   const day = info.date.getDay(); // Pobranie dnia tygodnia (0 = Niedziela, 1 = Poniedziałek, itd.)
        //   const workStart = workHours[day]?.start || 0; // Początek godzin pracy
        //   const workEnd = workHours[day]?.end || 0; // Koniec godzin pracy
        //   const isAvailable = hour >= workStart && hour < workEnd; // Sprawdzenie dostępności

        //   return isAvailable ? (
        //     <button
        //       style={{
        //         width: "100%",
        //         padding: "5px",
        //         backgroundColor: "#007bff",
        //         color: "white",
        //         border: "none",
        //         borderRadius: "4px",
        //         cursor: "pointer",
        //       }}
        //       onClick={() => alert(`Wybrano godzinę: ${hour}:00`)}
        //     >
        //       {hour}:00
        //     </button>
        //   ) : (
        //     <div style={{ textAlign: "center", color: "gray" }}>-</div>
        //   );
        // }}
        // (info) => (
        // <div>{generateHourlyButtons(info.date, info.date.getDay())}</div>
        // )}
        // slotLabelFormat={null}
      />
    </StyledScheduler>
  );
}
