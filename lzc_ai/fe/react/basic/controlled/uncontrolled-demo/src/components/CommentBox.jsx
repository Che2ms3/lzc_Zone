import { useRef } from 'react';

function CommentBox() {
    const textareaRef = useRef(null);

    const handleSubmit = () => {
        console.log(textareaRef.current.value);
    }

    return(
        <div>
            <textarea
            placeholder="输入评论..."
            ref={textareaRef}>
            </textarea>
            <button onClick={handleSubmit}>提交评论</button>
        </div>
    )
}

export default CommentBox
