let dataUrl = 'http://5dd1894f15bbc2001448d28e.mockapi.io/playlist'
let current = 1;

window.onload = () => {


  fetch(dataUrl)
  .then(response => response.json())
  .then(musicList => {
    constructPlaylist('playlist', musicList)
    setInitialPlay('main-album-art', 'main-album-info', musicList[0])
  })

  function constructPlaylist(playlistDiv, albums) {

    const playlist = document.getElementById(playlistDiv)

    albums.map(album => {
      console.log(album.track)

      const divPlaylistItem = document.createElement('div')
      divPlaylistItem.classList.add('playlist-item')

      const divPlaylistItemCover = document.createElement('div')
      divPlaylistItemCover.classList.add('item-cover')
      divPlaylistItemCover.innerHTML = `<img src="${album.albumCover}" alt="album cover">`

      const divPlaylistItemInfo = document.createElement('div')
      divPlaylistItemInfo.classList.add('item-info')
      divPlaylistItemInfo.innerHTML = `<p>${album.track}</p><p>${album.artist}</p>`

      divPlaylistItem.appendChild(divPlaylistItemCover)
      divPlaylistItem.appendChild(divPlaylistItemInfo)

      playlist.appendChild(divPlaylistItem)
    })

  }

  function setInitialPlay(albumCoverDiv, albumInfoDiv, album) {

    const albumCover = document.getElementById(albumCoverDiv)
    albumCover.innerHTML = `<img src="${album.albumCover}" alt=""> `

    const albumInfo = document.getElementById(albumInfoDiv)
    albumInfo.innerHTML = `<p>${album.track}</p> <p>${album.artist}</p>`
  }

}



function onMainPlay() {
  const musicPlayer = document.getElementById('main-player')
 
 if (musicPlayer.paused) {
  musicPlayer.play()
 }
 else {
  musicPlayer.pause()
 }

}


function onRepeat() {
  const musicPlayer = document.getElementById('main-player')

  if (musicPlayer.ended) {
    musicPlayer.play()
  }
}
