function Ertekel()
{
    var matek = (parseInt(document.getElementById("matek.first").value) + parseInt (document.getElementById("matek.second").value) + parseInt (document.getElementById("matek.third").value));
    var magyar = (parseInt(document.getElementById("magyar.first").value) + parseInt(document.getElementById("magyar.second").value)  + parseInt(document.getElementById("magyar.third").value));
    var tori = (parseInt(document.getElementById("tori.first").value) + parseInt(document.getElementById("tori.second").value)  + parseInt(document.getElementById("tori.third").value));
    var angol = (parseInt(document.getElementById("angol.first").value) + parseInt(document.getElementById("angol.second").value)  +parseInt(document.getElementById("angol.third").value));
    var sum = (matek + magyar + tori + angol);
    var eredmeny = (((sum / 4) / 150) * 100); 
    document.getElementById("eredmeny").innerHTML=eredmeny;
    document.getElementById("magyar.osszeg").innerHTML=magyar;
    document.getElementById("matek.osszeg").innerHTML=matek;
    document.getElementById("tori.osszeg").innerHTML=tori;
    document.getElementById("angol.osszeg").innerHTML=angol;
}