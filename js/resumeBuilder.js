/* === MODEL === */
/* BIO */
var bio = {
    name: "Nicholas",
    role: "Full Stack Web Developer",
    contacts: {
        mobile: "+5525997081428",
        email: "niku01@gmail.com",
        github: "https://github.com/nicholasinatel",
        twitter: "none",
        location: "Sao Lourenco MG BR"
    },
    welcomeMessage: "Hello Welcome to my Resume, Hire Me!",
    skills: ['Front-End', 'Back-End'],
    biopic: 'https://live.staticflickr.com/3362/4631075524_4acf3ce1e7_z.jpg'
    // display: function taking no parameters

}
/* EDUCATION */
var education = {
    schools: [{
        name: "Inatel",
        location: "Santa Rita do Sapucai",
        degree: "Graduation",
        majors: ['Control and Automation Engineering', 'Embedded Systems With IoT Cientific Initiation'],
        dates: "25-5-2019",
        url: "www.inatel.br"
    }],

    onlineCourses: [{
        title: "Full Stack Web Dev",
        school: "udacity",
        dates: "25-5-2019",
        url: "udacity Url String"
    }],
    // display: function taking no parameters
}
/* WORK */
var work = {
    jobs: [{
        employer: "Dagora",
        title: "Full Stack Web Engineer",
        location: "Santa Rita do Sapucai",
        dates: "In Progress",
        description: "Rockstar programming"
    }, {
        employer: "DasCoisas",
        title: "Embedded Software Engineer",
        location: "Santa Rita do Sapucai",
        dates: "01-01-2017",
        description: "Rockstar programming"
    }],
    // display: function taking no parameters
}
/* PROJECTS */
var projects = {
    projects: [{
        title: "Holismo",
        start: "10-12-2019",
        dates: "10-12-2019",
        description: "Rockstar programming",
        images: 'https://live.staticflickr.com/3362/4631075524_4acf3ce1e7_z.jpg'
    }, {
        title: "Fiscoserv",
        start: "10-12-2019",
        dates: "10-12-2019",
        description: "Rockstar programming",
        images: 'https://live.staticflickr.com/3362/4631075524_4acf3ce1e7_z.jpg'
    }]
}


$(document).ready(function () {
    /* === VIEW === */
    var headerView = {
        init: function () {
            this.header = $('#header');
            this.render();
        },
        render: function () {
            // Destructuring
            var {
                name,
                role
            } = octopus.getHeader();

            HTMLheaderName = HTMLheaderName.replace("%data%", name);
            HTMLheaderRole = HTMLheaderRole.replace("%data%", role);

            this.header.append(HTMLheaderName);
            this.header.append(HTMLheaderRole);

            this.header.show();
        }
    };
    var workExperienceView = {
        init: function () {
            this.workExperience = $('#workExperience');
            this.render();
        },
        render: function () {
            var job = octopus.getWorkExperience();

            for (var i = 0; i < job.jobs.length; i++) {
                var nuHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.jobs[i].employer);
                var nuHTMLworkTitle = HTMLworkTitle.replace("%data%", job.jobs[i].title);
                var nuHTMLworkDates = HTMLworkDates.replace("%data%", job.jobs[i].dates);
                var nuHTMLworkLocation = HTMLworkLocation.replace("%data%", job.jobs[i].location);
                var nuHTMLworkDescription = HTMLworkDescription.replace("%data%", job.jobs[i].description);

                this.workExperience.append(nuHTMLworkEmployer);
                this.workExperience.append(nuHTMLworkTitle);
                this.workExperience.append(nuHTMLworkDates);
                this.workExperience.append(nuHTMLworkLocation);
                this.workExperience.append(nuHTMLworkDescription);
            }
            this.workExperience.show();
        }
    };
    var projectsView = {
        init: function () {
            this.projects = $('#projects');
            this.render();
        },
        render: function () {
            var project = octopus.getProject();

            for (var i = 0; i < project.projects.length; i++) {
                var nuHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
                var nuHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
                var nuHTMLprojectStart = HTMLprojectStart.replace("%data%", project.projects[i].start);
                var nuHTMLprojectDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
                var nuHTMLprojectImage = HTMLprojectImage.replace("%data%", project.projects[i].images);

                this.projects.append(nuHTMLprojectTitle);
                this.projects.append(nuHTMLprojectDescription);
                this.projects.append(nuHTMLprojectStart);
                this.projects.append(nuHTMLprojectDates);
                this.projects.append(nuHTMLprojectImage);
            }
            this.projects.show();

        }
    };
    var educationView = {
        init: function () {
            this.education = $('#education');
            this.render();
        },
        render: function () {
            /* Physic School */
            var educationSchool = octopus.getEducationSchool();
            for (var i = 0; i < educationSchool.length; i++) {
                var nuHTMLschoolName = HTMLschoolName.replace("%data%", educationSchool[i].name);
                var nuHTMLschoolDegree = HTMLschoolDegree.replace("%data%", educationSchool[i].degree);
                var nuHTMLschoolDates = HTMLschoolDates.replace("%data%", educationSchool[i].dates);
                var nuHTMLschoolLocation = HTMLschoolLocation.replace("%data%", educationSchool[i].dates);
                var nuHTMLschoolMajor = HTMLschoolMajor.replace("%data%", educationSchool[i].majors);
                var nuHTMLschoolURL = HTMLschoolURL.replace("%data%", educationSchool[i].url);

                this.education.append(nuHTMLschoolName);
                this.education.append(nuHTMLschoolDegree);
                this.education.append(nuHTMLschoolDates);
                this.education.append(nuHTMLschoolLocation);
                this.education.append(nuHTMLschoolMajor);
                this.education.append(nuHTMLschoolURL);
            }

            /* Online Courses */
            this.education.append(HTMLonlineClasses);
            var educationOnline = octopus.getEducationOnline();
            for (var i = 0; i < educationOnline.length; i++) {
                var nuHTMLonlineTitle = HTMLonlineTitle.replace("%data%", educationOnline[i].title);
                var nuHTMLonlineSchool = HTMLonlineSchool.replace("%data%", educationOnline[i].school);
                var nuHTMLonlineDates = HTMLonlineDates.replace("%data%", educationOnline[i].dates);
                var nuHTMLonlineURL = HTMLonlineURL.replace("%data%", educationOnline[i].url);

                this.education.append(nuHTMLonlineTitle);
                this.education.append(nuHTMLonlineSchool);
                this.education.append(nuHTMLonlineDates);
                this.education.append(nuHTMLonlineURL);
            }
            this.education.show();
        }
    };
    var mapDivView = {
        init: function () {
            this.map = $('#mapDiv');
            this.render();

        },
        render: function () {
            this.map.append(googleMap);
            this.map.show();
        }
    };
    var letsConnectView = {
        init: function () {
            this.connect = $('#lets-connect');
            this.footer = $('#footerContacts')
            this.render();
        },
        render: function () {
            var contact = octopus.getContact();

            HTMLmobile = HTMLmobile.replace("%data%", contact.mobile);
            HTMLemail = HTMLemail.replace("%data%", contact.email);
            HTMLgithub = HTMLgithub.replace("%data%", contact.github);
            HTMLlocation = HTMLlocation.replace("%data%", contact.location);

            this.footer.append(HTMLmobile);
            this.footer.append(HTMLemail);
            this.footer.append(HTMLgithub);
            this.footer.append(HTMLlocation);

            this.connect.show();
        }
    };

    /* === OCTOPUS === */
    var octopus = {
        init: function () {
            headerView.init();
            workExperienceView.init();
            projectsView.init();
            educationView.init();
            mapDivView.init();
            letsConnectView.init();
        },
        getHeader: function () {
            return bio;
        },
        getWorkExperience: function () {
            return work;
        },
        getProject: function () {
            return projects;
        },
        getEducationSchool: function () {
            return education.schools;
        },
        getEducationOnline: function () {
            return education.onlineCourses;
        },
        getContact: function () {
            return bio.contacts;
        }
    };
    octopus.init();
});
