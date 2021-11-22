import classNames from 'classnames'
import './style.css'

type ImageProps = {
  source: string
  linkTo: string
  imageClass: string
}
const Image = (props: ImageProps) => {
  const { source, linkTo, imageClass } = props
  const imageProps = classNames(imageClass)
  return (
    <div>
      {linkTo ? (
        <a href={linkTo}>
          <img className={imageProps} src={source} />
        </a>
      ) : (
        <img className={imageProps} src={source} />
      )}
    </div>
  )
}
export default Image
