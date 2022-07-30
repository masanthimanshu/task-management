const url =
  "https://script.google.com/macros/s/AKfycbx-WUXA1XtgCFKpoyuc8EpuvpGg-_9kM4PKe68ZnYcsCnuT-dZhgO8-XgS-LzyQ9Qxf/exec";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

getData()
  .then((res) => {
    res.forEach((element, index) => {
      $("#root").append(`
      <section class="main ${element.status}">
        <div>
          <h2>${element.task}</h2>
          <br />
          <p>${element.desc}</p>
          <p class="name"><b>Assigned to : ${element.assigned}</b></p>
          <br /><br />
          <button onClick="modal('task_${index}')">View Details</button>
        </div>

        <div class="status">
          <p>
            <i class="fa-solid fa-circle-question"></i> &nbsp;
            Status : ${element.status}
          </p>
        </div>

        <section class="flex modal" id="task_${index}" style="display: none" hidden>
          <div class="flex inner">
            <div>
              <h2>${element.task}</h2>
              <br />
              <p>${element.detail}</p>
              <br />
              <br />
              <button onClick="modal('task_${index}')">Close</button>
            </div>
          </div>
        </section>
      </section>
      `);
    });
  })
  .catch((err) => console.log(err));

function modal(id) {
  $(`#${id}`).toggle("hidden");
}
