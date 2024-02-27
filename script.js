document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loader-wrapper").style.opacity = 0;
        setTimeout(function() {
            document.getElementById("loader-wrapper").style.display = "none";
            document.getElementById("header").classList.add("header-fade-in");
            document.getElementById("sobre").style.display = "block";
            document.getElementById("sobre").classList.add("tabcontent-fade-in");
        }, 500);
    }, 2000);

    document.getElementById("defaultOpen").click();
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Adicionando projetos pré-definidos
addPredefinedProjects();

function addPredefinedProjects() {
    var projects = [
        {
            name: "Projeto Análise de Dados de Filmes",
            description: "Análise de dados de filmes utilizando Python e bibliotecas como Pandas e Matplotlib.",
            link: "https://github.com/AndreLuislgr/ProjetoAnaliseDadosfilme"
        },
        {
            name: "Rock Paper Scissors",
            description: "Jogo clássico de Pedra, Papel e Tesoura desenvolvido em JavaScript.",
            link: "https://github.com/AndreLuislgr/Rockpaperscissors"
        },
        {
            name: "Pokedex",
            description: "Pokedex simples desenvolvida em HTML, CSS e JavaScript.",
            link: "https://github.com/AndreLuislgr/Pokedex"
        },
        {
            name: "SupermercadoJS",
            description: "Aplicação web de simulação de compra em um supermercado, desenvolvida em JavaScript.",
            link: "https://github.com/AndreLuislgr/supermercadoJS"
        },
        {
            name: "Site Pessoal",
            description: "Meu site pessoal desenvolvido em HTML, CSS e JavaScript.",
            link: "https://github.com/AndreLuislgr/sitePessoal"
        },
        {
            name: "Jogo JavaScript",
            description: "Um simples jogo desenvolvido em JavaScript.",
            link: "https://github.com/AndreLuislgr/jogoJavascript"
        }
    ];

    var projectList = document.getElementById("project-list");

    projects.forEach(function(project) {
        var projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = "<h3>" + project.name + "</h3><p>" + project.description + "</p><a href='" + project.link + "' target='_blank'>Ver projeto</a>";
        projectList.appendChild(projectDiv);
    });
}
