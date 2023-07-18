const form=document.querySelector("#form")

form.addEventListener("submit", e => {
    e.preventDefault();

    let bot={
            TOKEN: "5997055194:AAGrP0nWWz9szZCGJqEfFTFcYZfeiweWXBM",
            chatID: "903596076"
    }

    let username=document.getElementById("user_name").value;
    let useremail=document.getElementById("user_email").value;
    let aboutmessage=document.getElementById("about_message").value;
    let message=document.getElementById("message").value;

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=
    ${"Ism: "}${username} 
    ${"Email: "}${useremail} 
    ${"Nima haqida? "}${aboutmessage} 
    ${"Xabar matni: "}${message}`,{
        method: "GET"
    })
    .then(success => {
        alert("Xabar muvaffaqiyatli yuborildi!")
    }, error => {
        alert("Xabar yuborishda xatolik!");
        console.log(error)
    })

});
// :AAGrP0nWWz9szZCGJqEfFTFcYZfeiweWXBM
