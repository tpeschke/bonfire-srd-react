import './Image.css'

interface Props {
    src: string
}

export default function Image({ src }: Props) {
    return (
        <a href='https://www.gorangligovic.com/' target='_blank'>
            <img src={'/src/assets/images/' + src} />
        </a>
    )
}