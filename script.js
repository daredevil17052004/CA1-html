const backbutton = document.getElementById('back');
const back = document.getElementById('background');

backbutton.oninput = () =>{
    back.style.fill  = backbutton.value;
}

const jerseybutton = document.getElementById('jersey-btn');
const jersey  = document.getElementById('Jersey');

jerseybutton.oninput = () =>{
    jersey.style.fill = jerseybutton.value;
}

const stripesbutton = document.getElementById('stripes-btn');
const Stripes = document.getElementById('stripes');

stripesbutton.oninput = () =>{
    Stripes.style.fill  = stripesbutton.value;
}

const hairbutton = document.getElementById('hair-btn');
const Hair = document.getElementById('hair');

hairbutton.oninput = () =>{
    Hair.style.fill = hairbutton.value;
}

const facebutton = document.getElementById('face-btn');
const Face = document.getElementById('face');

facebutton.oninput = () =>{
    Face.style.fill = facebutton.value;
}

const beardbutton = document.getElementById('beard-btn');
const Beard = document.getElementById('beard');

beardbutton.oninput= ()=>{
    Beard.style.fill = beardbutton.value;
}

const textbutton = document.getElementById('text-btn');
const Text = document.getElementById('text');

textbutton.oninput= ()=>{
    Text.style.fill = textbutton.value;
}