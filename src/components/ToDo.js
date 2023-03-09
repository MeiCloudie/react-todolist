import './ToDo.css'

function ToDo() {
  const toDos = [
    {
      id: "todo1",
      date: new Date(2023, 3, 28),
      title: "Housework",
      state: "New",
      note1: "Mop and sweep the floor",
      note2: "Tidy the room",
      note3: "Do the washing up",
    },
    {
      id: "todo2",
      date: new Date(2023, 3, 14),
      title: "Study",
      state: "Active",
      note1: "Do homework",
      note2: "Do subject projects",
      note3: "Group meeting",
    },
    {
      id: "todo3",
      date: new Date(2023, 3, 12),
      title: "Job",
      state: "Resolved",
      note1: "Write a report",
      note2: "Online meeting",
      note3: "Website Research",
    },
  ];  
  return (
    <div className="card">
      {toDos.map((t, i) => (
        <>
          <section>
            <div className="todo-item">
              <div className="todo-date">
                {/* <div>{t.date.toString()}</div> */}
                <div className="todo-date__month">{t.date.toLocaleString("en-US", { month: "long" })}</div>
                <div className="todo-date__year">{t.date.getFullYear()}</div>
                <div className="todo-date__day">{t.date.toLocaleString("en-US", { day: "2-digit" })}</div>
              </div>
              <div className="todo-item__title">{t.title}</div>
              <div className="todo-item__state">State: {t.state}</div>
            </div>
            <div className="todo-item__notes">
              <h2>Notes:</h2>
              <ul>
                <li>{t.note1}</li>
                <li>{t.note2}</li>
                <li>{t.note3}</li>
              </ul>
            </div>
          </section>
        </>
      ))}
    </div>
        // <div>
        //     <section>
        //     <div className="todo-item">
        //       <div className="todo-date">
        //         {/* <div>{t.date.toString()}</div> */}
        //         <div className="todo-date__month">Month</div>
        //         <div className="todo-date__year">Year</div>
        //         <div className="todo-date__day">Day</div>
        //       </div>
        //       <div className="todo-item__title">Title</div>
        //       <div className="todo-item__state">State</div>
        //     </div>
        //     <div className="todo-item__notes">
        //       <h2>Notes:</h2>
        //       <ul>
        //         <li>Note1</li>
        //         <li>Note2</li>
        //         <li>Note3</li>
        //       </ul>
        //     </div>
        //   </section>
        // </div>
    );
}

export default ToDo;