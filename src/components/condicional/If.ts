/* 
    <If test={expressão}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If
*/

export default function If(props) {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}