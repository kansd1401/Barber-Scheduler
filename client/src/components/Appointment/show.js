import React from "react";


export default function Show(props) {
  return (
    <main className={`appointment__card appointment__card--show${Math.floor(Math.random() * (5 - 1 + 1)) + 1}`}>
      <section className="appointment__card-left">
        <h2 className="text--regular">{props.name}</h2>
        <section className="interviewer">
          <h3 className="text--regular">{props.notes}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        {/* <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section> */}
      </section>
    </main>
  );
}