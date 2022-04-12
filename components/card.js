import {Panel, Placeholder} from 'rsuite'

export default function ({title, ...props}) {
    return (<>
        <Panel {...props} bordered header={title}>
            <Placeholder.Paragraph/>
        </Panel>
    </>)
}