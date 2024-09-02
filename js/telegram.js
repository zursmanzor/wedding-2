TOKEN = "7033068290:AAEI6Dn8Om0NYFOz7aIHfWKPc2YAaHzlfe0";
const CHAT_ID = "-1002102638303";
const URI_API = `https://api.telegram.org/bot${ TOKEN}/sendMessage`;
document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${ this.full_name.value}\n`;
    message += `<b>Телефон: </b> ${ this.contact_no.value}\n`;
    message += `<b>E-mail: </b> ${ this.email.value}\n`;
    message += `<b>Ответ: </b> ${ this.guest_no.value}\n`;
    message += `<b>Нас будет: </b> ${ this.event_name.value}\n`;
    let name_valid = "";
    name_valid += `${ this.name.value}\n`;
    if (name_valid.replace(/^\s+|\s+$/g, '') != '') {
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: `html`,
            text: message
        })
    } 
})