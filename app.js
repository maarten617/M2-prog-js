class App
{
    runApplication()
    {
        console.log ("hello world!");
        let appNaam = "mijn naam dingelingetje";
        let versienummer = 0.9;
        let versiedatum = "11-03-06";
        let autheur = "maarten";
        let copyright = "ja";
        let distributer = "mediacollege amsterdam";
        let darkmode = true;
        console.log(appNaam, versiedatum, versiedatum, autheur, copyright, distributer, darkmode,);

    }
}
let app = new App();
app.runApplication();