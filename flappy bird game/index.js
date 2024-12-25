let move_speed=3,gravity=0.5;
let bird=document.querySelector('.bird');
let img=document.getElementById('b1');

let birdprop=bird.getBoundingClientRect();

let background=document.querySelector('.background').getBoundingClientRect();
let score_val=document.querySelector('.score_val');
let msg=document.querySelector('.msg');
let score_title=document.querySelector('.score_title');

let game_state='Start';
img.style.display='none';
msg.classList.add('msgStyle');

document.addEventListener('keydown',(e)=>{
    if(e.key=='Enter' && game_state!='Play'){
        document.querySelectorAll('.pipe_sprite').forEach((e)=>{
            e.remove();
        });
        img.style.display='block';
        bird.style.top='40vh';
        game_state='Play';
        msg.innerHTML='';
        score_title.innerHTML='Score: ';
        score_val.innerHTML='0';
        msg.classList.remove('msgStyle');
        play();
    }
});
function play(){
    function move(){
        if(game_state!='Play'){
            return;
        }
        let pipe_sprite=document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element)=>{
            let pipe_sprite_props=element.getBoundingClientRect();
            birdprop=bird.getBoundingClientRect();

            if(pipe_sprite_props.right<=0){
                element.remove();
            }
            else{
                if(birdprop.left<pipe_sprite_props.left +pipe_sprite_props.width && birdprop.left+birdprop.width>pipe_sprite_props.left && birdprop.top<pipe_sprite_props.top+pipe_sprite_props.height && birdprop.top+birdprop.height>pipe_sprite_props.top){
                    game_state='End';
                    msg.innerHTML='GAME OVER!!!'.fontcolor('red')+'<br> Press Enter to Restart';
                    img.style.display='none';
                    return;
                }else{
                    if(pipe_sprite_props.right<birdprop.left && pipe_sprite_props.right+move_speed>=birdprop.left && element.increase_score=='1'){
                        score_val.innerHTML=+score_val.innerHTML+1;
                    }
                    element.style.left=pipe_sprite_props.left-move_speed+'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy=0;
    function apply_gravity(){
        if(game_state!='Play')return;
        bird_dy=bird_dy+gravity;
        document.addEventListener('keydown',(e)=>{
            if(e.key=='ArrowUp' || e.key==' '){
                img.src='img/b2.png';
                bird_dy=-7.6;
            }
        });
        document.addEventListener('keyUp',(e)=>{
            if(e.key=='ArrowUp' || e.key==' '){
                img.src='img/b1.png';
            }
        });

        if(birdprop.top<=0 || birdprop.bottom>=background.bottom){
            game_state='End';
            msg.style.left='28vw';
            window.location.reload();
            msg.classList.remove('msgStyle');
            return;
        }
        bird.style.top=birdprop.top+bird_dy+'px';
        birdprop=bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_seperation=0;
    let pipe_gap=35;
    function create_pipe(){
        if(game_state!='Play')return;

        if(pipe_seperation>115){
            pipe_seperation=0;
            let pipe_pos=Math.floor(Math.random()*43)+8;
            let pipe_sprite_inv=document.createElement('div');
            pipe_sprite_inv.className='pipe_sprite';
            pipe_sprite_inv.style.top=pipe_pos-70+'vh';
            pipe_sprite_inv.style.left='100vw';

            document.body.appendChild(pipe_sprite_inv);

            let pipe_sprite =document.createElement('div');
            pipe_sprite.className='pipe_sprite';
            pipe_sprite.style.top=pipe_pos+pipe_gap+'vh';
            pipe_sprite.style.left='100vw';
            pipe_sprite.increase_score='1';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}