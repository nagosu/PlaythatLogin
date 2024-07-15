
// 펑션, 메시지 서버통신
async function server_chat(userMessage) {

    //2가지 분기에 따른 사용 해보기 위해 미리 더미데이터를 여러 종류를 만들어 놓음
    let data = {
    assistant_message: "네 반가워요"
    // assistant_message = ""
    };

    // 서버통신 구현 부분

    if(data){
        /* AI 챗봇 메시지 가져오기 */
        aiMessage = data.assistant_message
        if(aiMessage!="") {
            //업데이트 진행 예시
            const allTextElements = document.querySelectorAll('.commentGroup .text');
            const lastTextElement = allTextElements[allTextElements.length - 1];
            if (lastTextElement) {
                lastTextElement.innerHTML = aiMessage;
            }
        }else{
            console.log("aimessage가 없습니다.")
        }
    }else{
        /* 오류 발생 시 콘솔에 출력 */
        console.error("Error response");
    }
}