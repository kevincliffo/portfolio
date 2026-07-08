// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Live clock in the phone status bar
function updateClock(){
  const el = document.getElementById('phoneClock');
  if(!el) return;
  const now = new Date();
  const h = now.getHours().toString().padStart(2,'0');
  const m = now.getMinutes().toString().padStart(2,'0');
  el.textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 15000);

// Simulated STK Push lifecycle — loops through realistic Daraja states
const stkSteps = [
  {
    title: 'Sending payment request…',
    detail: 'To: STIMA SACCO — KES 2,450.00',
    code: 'POST /mpesa/stkpush/v1/processrequest',
    progress: '22%'
  },
  {
    title: 'Awaiting PIN on phone…',
    detail: 'Prompt sent to 07•• ••• 214',
    code: 'status: "pending" · CheckoutRequestID: ws_CO_09…',
    progress: '55%'
  },
  {
    title: 'Confirming with Daraja…',
    detail: 'Verifying MPESA receipt number',
    code: 'GET /mpesa/stkpushquery/v1/query',
    progress: '82%'
  },
  {
    title: 'Payment confirmed ✓',
    detail: 'Receipt: SFC7X9K2LQ · KES 2,450.00',
    code: '"ResultCode": 0, "ResultDesc": "Success"',
    progress: '100%'
  }
];

let stkIndex = 0;
const stkTitle = document.getElementById('stkTitle');
const stkDetail = document.getElementById('stkDetail');
const stkCode = document.getElementById('stkCode');
const stkProgress = document.getElementById('stkProgress');

function renderStkStep(){
  const step = stkSteps[stkIndex];
  if(!stkTitle) return;

  stkTitle.textContent = step.title;
  stkDetail.textContent = step.detail;
  stkCode.textContent = step.code;
  stkProgress.style.width = step.progress;

  stkTitle.style.color = stkIndex === stkSteps.length - 1 ? 'var(--success)' : 'var(--paper)';

  stkIndex = (stkIndex + 1) % stkSteps.length;
}

if(stkTitle){
  renderStkStep();
  setInterval(renderStkStep, 2200);
}

// Respect reduced motion: freeze on the "confirmed" state
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches && stkTitle){
  stkIndex = stkSteps.length - 1;
  renderStkStep();
}
