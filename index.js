const express = require('express');
const abletonParser = require('als-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/audio-tracks', (req, res) => {
  abletonParser.parseFile('../abnormal-loop.als')
    .then((alsData) => {
      const audioTracks = alsData.getTracks()[0].AudioTrack;
      const trackNames = audioTracks.map((track) => track.Name[0].EffectiveName[0].$.Value);
      res.json(trackNames);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error parsing ALS file');
    });
});

app.get('/midi-tracks', (req, res) => {
  abletonParser.parseFile('../abnormal-loop.als')
    .then((alsData) => {
      const midiTracks = alsData.getTracks()[0].MidiTrack;
      const trackNames = midiTracks.map((track) => track.Name[0].EffectiveName[0].$.Value);
      res.json(trackNames);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error parsing ALS file');
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});