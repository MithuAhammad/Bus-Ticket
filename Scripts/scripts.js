function ticket(ticketName) {
  const container = document.getElementById("all-seat");
  const totalSeatContainer = document.getElementById("totalseat");
  const button = document.getElementById(ticketName);
  const modal = document.getElementById("my_modal_1");
  const div = document.createElement("div");
  const totalSeat = container.children.length + 1;
  if (totalSeat <= 4) {
    div.innerHTML = `<div class=" font-normal flex justify-around">
        <h1>${ticketName}</h1>
        <h1>Economy</h1>
        <h1>550</h1>
    </div>`;
    container.appendChild(div);
    button.disabled = true;
    button.style.backgroundColor = "#1DD100";
    totalSeatContainer.innerHTML = `${totalSeat}`;
  } else {
    modal.showModal();
  }
}
