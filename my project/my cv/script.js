const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    // გადართვა Dark/Light კლასებს შორის
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeToggle.textContent = 'გადართვა Dark Mode-ზე';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeToggle.textContent = 'გადართვა Light Mode-ზე';
    }
    animateProgressBars(); 
});

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');

        bar.style.width = '100%'; 
        bar.style.height = '12px';
        bar.style.backgroundColor = 'var(--bg-primary)';
        bar.style.borderRadius = '6px';
        bar.style.marginBottom = '15px';
        bar.style.position = 'relative';
        bar.innerHTML = `<span style="display:block; width:0; height:100%; background-color:var(--accent-color); border-radius:6px; transition: width 2s ease-out; position:absolute; line-height:12px; text-align:right; padding-right:5px; color:white; font-size:10px;"></span>`;
        
        // ანიმაციის გაშვება
        setTimeout(() => {
            const innerBar = bar.querySelector('span');
            innerBar.style.width = progress + '%';
            innerBar.textContent = progress + '%';
        }, 100); 
        
        bar.addEventListener('mouseover', () => {
             bar.querySelector('span').style.backgroundColor = 'var(--hover-color)';
        });
        bar.addEventListener('mouseout', () => {
             bar.querySelector('span').style.backgroundColor = 'var(--accent-color)';
        });
    });
}

// გვერდის ჩატვირთვის შემდეგ ანიმაციის გაშვება
document.addEventListener('DOMContentLoaded', animateProgressBars);