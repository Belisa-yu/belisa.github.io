document.addEventListener('DOMContentLoaded', function(){
    const projects = {
        "users": [
            {
                "name": "Belisa",
                "projects": [
                    {
                        "name Project": "Esta web",
                        "Dificulty": "Easy",
                        "Time": "4h",
                        "Tecnologies": "HTML, CSS, JS"
                    }
                ]
            },
            {
                "name": "Miguel",
                "projects": [
                    {
                        "name Project": "My neural network",
                        "Dificulty": "Medium",
                        "Time": "16h",
                        "Tecnologies": "Python, numba, CUDA",
                        "Link": "https://gitlab.com/MiguelBorre/my-neural-network"
                    },
                    {
                        "name Project": "Sat Tester",
                        "Dificulty": "Medium",
                        "Time": "40h",
                        "Tecnologies": "Java, Threading",
                        "Link": "https://github.com/aledelmon/practica1"
                    },
                    {
                        "name Project": "csv to mongoDB",
                        "Dificulty": "Easy",
                        "Time": "10h",
                        "Tecnologies": "Python",
                        "Link": "https://github.com/MiguelBorre/csv-to-mongodb"
                    }
                ]
            }
        ]
    }

    const BelisaDiv = document.getElementById("BelisaProjects");
    const MiguelDiv = document.getElementById("MiguelProjects");

    projects["users"][0]["projects"].forEach(function(project){
        const div = document.createElement('div');
        div.className = 'project', 'person2';
        
        const head = document.createElement('h3');
        head.className = 'projectTitle';
        head.textContent = project['name Project'];

        const dificultad = document.createElement('p');
        dificultad.textContent = project['Dificulty'];

        const time = document.createElement('p');
        time.textContent = project['Time'];

        const tech = document.createElement('p');
        tech.textContent = project['Tecnologies'];

        div.appendChild(head);
        div.appendChild(dificultad);
        div.appendChild(time);
        div.appendChild(tech);

        BelisaDiv.appendChild(div);
    })

    projects["users"][1]["projects"].forEach(function(project){
        const div = document.createElement('div');
        div.className = 'project', 'person1';
        
        const head = document.createElement('h3');
        head.className = 'projectTitle';
        head.textContent = project['name Project'];

        const dificultad = document.createElement('p');
        dificultad.textContent = project['Dificulty'];

        const time = document.createElement('p');
        time.textContent = project['Time'];

        const tech = document.createElement('p');
        tech.textContent = project['Tecnologies'];

        const link = document.createElement('a');
        link.href = project['Link'];
        link.className = 'link';
        link.textContent = 'see the code'

        div.appendChild(head);
        div.appendChild(dificultad);
        div.appendChild(time);
        div.appendChild(tech);
        div.appendChild(link)

        MiguelDiv.appendChild(div);
    })
});