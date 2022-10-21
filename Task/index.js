export const Task = (props) => {
  const { done, due, name } = props;
  let tick = '';
  if (done) {
    tick = '✓';
  }
  return `
  <div class="task">
  <div class="task__body">
    <div class="task__name">${name}</div>
    <div class="task__due">${due}</div>
  </div>
  <div class="task__done">${tick}</div>
</div>
  `;
};