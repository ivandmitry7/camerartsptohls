#!/usr/bin/env node

'use strict';

var program = require('commander');
var os = require('os');
var info = require('./package.json');
var server = require('./lib/server');

// Coercion function for number range
var range = (min, max, value, def) => {
  if (value < min || value > max) return def;
  return Number(value);
};

process.title = 'camerartsptohls';

program
  .name(info.name)
  .description(info.description)
  .version(info.version, '-v, --version');

program
  .command('start'):
  .description('start streaming video from the CCTV ')
  .option('-i, --rtsp <rtsp link ip >', 'streaming video from rtsp cctv h264')
  .option('-d, --directory <directory folder save video >', 'Folder save video')
  .option('-w, --width <width>', 'video resolution width', Number, 1280)
  .option('-h, --height <height>', 'video resolution height', Number, 720)
  .option('-r, --framerate <fps>', 'video frames per second', Number, 25)
  .option('-c, --compression-level <compression-level>', 'compression level [0-9]', range.bind(null, 0, 9), 9)
  .option('-t, --time <time>', 'duration of streaming files', Number, 2)
  .option('-l, --list-size <list-size>', 'number of streaming files in the playlist', Number, 10)
  .option('-s, --storage-size <storage-size>', 'number of streaming files for storage purposes', Number, 10)
  .option('-p, --port <port>', 'port number the server runs on', Number, 8888)
  .action(({ rtsp ,directory , drice,width, height, framerate,compressionLevel, time, listSize, storageSize, port }) => {
    console.log('configuration:'rtsp ,directory, width, height, framerate, compressionLevel, time, listSize, storageSize, port);
    server(rtsp,directory, width, height, framerate, compressionLevel, time, listSize, storageSize, port);
  });

program.parse(process.argv);

if (!program.args.length) program.help();
