const express = require('express');
const abletonParser = require('als-parser');

const app = express();
const port = 3000;

abletonParser.parseFile('../2canales-midi-audio-sinclips.als').then((res) => {
    
    const arrayTracks = res.getTracks();
    
    //cicle through arraytracks and get the name of each track
    arrayTracks[0].AudioTrack.forEach(element => {
        console.log(element.Name[0].EffectiveName[0].$.Value);
    });

    arrayTracks[0].MidiTrack.forEach(element => {
        console.log(element.Name[0].EffectiveName[0].$.Value);
    });
    
    // this returns an object with value '$' and the attribute is another object with value '6-Audio'

});