const EXPERIENCES = [
    {
        tittle: "titulo",
        description: "descripcion",
        time: "tiempo"
    },
    {
        tittle: "titulo",
        description: "descripcion",
        time: "tiempo",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const experiences = document.getElementById('experiences');

    function crearTimeline() {
        const timeline = document.createElement('ol');
        timeline.classList = 'relative border-l-2 border-gray-700 dark:border-gray-700 ';

        EXPERIENCES.forEach(exp => {
            const li = document.createElement('li');
            li.classList = 'mb-10 ms-4 ml-8 p-1';
            li.innerHTML = `
                <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 class="text-lg font-semibold text-gray-300 dark:text-white">${exp.tittle}</h3>
                <p class="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">${exp.description}</p>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${exp.time}</time>
            `;
            timeline.appendChild(li);
        });

        experiences.appendChild(timeline);
    }

    crearTimeline();
});
