const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menu = document.getElementById('navbar-default');

button.addEventListener('click', function () {
    menu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarItems = document.querySelectorAll('#navbar-default a');

    navbarItems.forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById('navbar-default').classList.remove('block');
            document.getElementById('navbar-default').classList.add('hidden');
        });
    });
});

const projContainer = document.getElementById('projContainer');
const projects = [
    {
        title: "organAIze",
        desc: "Optimize your daily routine with AI",
        tools: "Next.js, HuggingFace, Prompt Engineering, Tailwind, TypeScript",
        image: "assets/portfolio/organaize/organaize.png",
        url: "https://organaize.vercel.app/"
    },
    {
        title: "Ishaare!",
        desc: "Heads Up game but for Indians",
        tools: "Next.js, Supabase, Tailwind, TypeScript, Vercel",
        image: "assets/portfolio/ishaare/ishaare.png",
        url: "https://ishaaregame.vercel.app/"
    },
    {
        title: "Real Among Us",
        desc: "Play with friends while performing tasks in real life",
        tools: "Angular, Firebase, NoSQL, Tailwind, HTML, CSS",
        image: "assets/portfolio/amongus/login.png",
        url: "https://akrypt.github.io/amongus_real"
    },
    {
        title: "Handpose",
        desc: "Classifies your hand gestures",
        tools: "Machine Learning, Tensorflow, Scikit-Learn, Python",
        image: "assets/portfolio/handpose/hand.jpg",
        url: "https://github.com/AkRypt/handpose"
    },
    {
        title: "Venue Reservation",
        desc: "System to reserve venues for events and prevent collisions",
        tools: "Android Studio, Firebase, Java, XML, Android",
        image: "assets/portfolio/venue/login_sq.jpeg",
        url: "https://github.com/AkRypt/VenueBookingAppHITAM"
    },
    {
        title: "Toastmasters",
        desc: "Facilitate toastmasters meetings with this useful app",
        tools: "Android Studio, Firebase, Java, XML, Android",
        image: "assets/portfolio/tm/splashscreen.jpeg",
        url: "https://github.com/AkRypt/HITAMToastmastersApp"
    }
]

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = "";
    projectElement.innerHTML = `
        <a href="${project.url}" id="${project.title}" target="_blank"
        class="w-full h-[38vh] md:h-[64vh] bg-transparent shado overflow-hidden flex flex-col justify-center items-center rounded-lg relative">
            <div class="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 w-[70%] h-[140%] absolute blur animate-spin_right_slow"></div>
            <div class="w-[98%] h-[98%] bg-gradient-to-br from-black via-gray-900 group to-black p-2 md:p-4 md:px-6 rounded-lg relative overflow-hidden hover:from-white hover:to-white">
                <p class="text-sm md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                    ${project.title}
                </p>
                <div class="w-full h-[50%] md:h-[70%] my-4 p-4 rounded-xl bg-gradient-to-br from-black via-gray-900 to-black hidden group-hover:block">
                    <p class="text-sm md:text-lg font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                        ${project.tools}
                    </p>
                </div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-[50%] md:h-[70%] my-4 object-cover rounded-xl group-hover:hidden">
                <p class="text-[75%] md:text-lg mb-4 font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                    ${project.desc}
                </p>
            </div>
        </a>
        `;
    projContainer.appendChild(projectElement);
});