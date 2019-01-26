# camerartsptohls



## Video Stream Playback
raspi-live is only concerned with streaming video from the camera module and does not offer a playback solution.

Browser support between the different streaming formats varies so in most cases a JavaScript playback library will be necessary. For more information on this, check out [Mozilla's article on the subject](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Live_streaming_web_audio_and_video).


## Performance
HLS and DASH inherently have latency baked into the technology. To reduce this, set the `time` option to 1 or .5 seconds and increase the list and storage size via the `list-size` and `storage-size` options. Ideally, there should be 12 seconds of video in the list and 50 seconds of video in storage.
