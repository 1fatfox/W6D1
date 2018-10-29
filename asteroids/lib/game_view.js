module.exports = () => {

  function fillRectangle(){
    const game_viewEl = document.getElementById('game-canvas');
    const ctx = game_viewEl.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,800,500);
  }

  // function draw_game(ctx){
  //
  // }

  document.addEventListener("DOMContentLoaded", fillRectangle);
};
