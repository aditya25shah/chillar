function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  sidebar.classList.toggle("hidden");
  content.classList.toggle("shifted");
}
function submitInvestment() {
  const amount = document.getElementById('amount').value;
  const type = document.getElementById('investment-type').value;
  const historyList = document.getElementById('history-list');
  if (amount && type) {
    const listItem = document.createElement('li');
    listItem.textContent = `Invested ${amount} in ${type}`;
    historyList.appendChild(listItem);
    document.getElementById('amount').value = '';
    document.getElementById('investment-type').value = '';
  } else {
    alert('Please enter an amount and select an investment type.');
  }
}
const form = document.getElementById('investment-form');
const historyTable = document.getElementById('history-table').querySelector('tbody');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = document.getElementById('amount').value;
  const investmentType = document.getElementById('investment-type').value;
  const date = new Date().toLocaleDateString();
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${amount}</td>
    <td>${investmentType}</td>
    <td>${date}</td>
  `;
  historyTable.appendChild(newRow);
  form.reset();
});
querySelector('tbody');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const loanType = document.getElementById('loanType').value;
  const annualIncome = document.getElementById('annualIncome').value;
  const date = new Date().toLocaleDateString();
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${annualIncome}</td>
    <td>${loanType.charAt(0).toUpperCase() + loanType.slice(1)} Loan</td>
    <td>${date}</td>
  `;
  historyTable.appendChild(newRow);
  form.reset();
  const loanStatus = document.getElementById('loanStatus');
  loanStatus.textContent = `Application for ${loanType.charAt(0).toUpperCase() + loanType.slice(1)} loan has been submitted.`;
});
