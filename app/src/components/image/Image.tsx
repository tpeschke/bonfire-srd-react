import './Image.css'

interface Props {
    src: string,
    isClass?: boolean
}

export default function Image({ src, isClass = false }: Props) {
    return (
        <a href='https://www.gorangligovic.com/' target='_blank'>
            <img className={isClass ? 'class-image' : ''} src={'/src/assets/images/' + src} />
        </a>
    )
}