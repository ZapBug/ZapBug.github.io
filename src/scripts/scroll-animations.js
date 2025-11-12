// 我们将所有逻辑包裹在一个函数中，以便在导入时调用
export function initializeScrollAnimations() {
      // --- 1. 初始化 ---
      const animatedElements = document.querySelectorAll('section, #hero-content-wrapper');
      
      animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        // 英雄区内容默认可见
        if (el.id === 'hero-content-wrapper') {
          el.classList.add('is-visible');
        }
      });

      // --- 2. 创建一个统一的、采用分层“滞后逻辑”的观察者 ---
      const thresholds = [];
      for (let i = 0; i <= 1.0; i += 0.05) {
        thresholds.push(i);
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const target = entry.target;
          const isCurrentlyVisible = target.classList.contains('is-visible');
          const ratio = entry.intersectionRatio;

          // 【分层的滞后逻辑】
          if (target.id === 'hero-content-wrapper') {
            // --- 英雄区的专属滞后阈值 ---
            const enterThreshold = 0.50; // 例如，可见面积达到 50% 时淡入
            const exitThreshold = 0.40;  // 可见面积低于 40% 时淡出

            if (ratio >= enterThreshold && !isCurrentlyVisible) {
              target.classList.add('is-visible');
            } else if (ratio < exitThreshold && isCurrentlyVisible) {
              target.classList.remove('is-visible');
            }
          } else {
            // --- 其他所有区域的统一滞后阈值 ---
            const enterThreshold = 0.50; 
            const exitThreshold = 0.30;  

            if (ratio >= enterThreshold && !isCurrentlyVisible) {
              target.classList.add('is-visible');
            } else if (ratio < exitThreshold && isCurrentlyVisible) {
              target.classList.remove('is-visible');
            }
          }
        });
      }, {
        threshold: thresholds,
      });

      // 3. 让一个观察者监视所有元素
      animatedElements.forEach(element => observer.observe(element));
}