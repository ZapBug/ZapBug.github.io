export function initializeCopyToClipboard() {
      const emailSpan = document.getElementById('email-span');
      if (emailSpan) {
        emailSpan.addEventListener('click', (event) => {
          const email = emailSpan.dataset.originalText;
          navigator.clipboard.writeText(email)
            .then(() => {
              const toast = document.createElement('div');
              toast.textContent = '✨ 已复制!';
              toast.classList.add('copy-toast');
              document.body.appendChild(toast);
              
              const rect = emailSpan.getBoundingClientRect();
              const topPosition = rect.top - toast.offsetHeight; 
              const leftPosition = rect.left + rect.width / 2;
              toast.style.top = `${topPosition}px`;
              toast.style.left = `${leftPosition}px`;
              
              setTimeout(() => { toast.remove(); }, 1500);
            })
            .catch(err => { console.error('复制失败: ', err); });
        });
      }
}