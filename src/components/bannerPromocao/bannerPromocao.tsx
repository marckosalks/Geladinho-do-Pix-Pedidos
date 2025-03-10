import "./styles.css"

type BannerType = {
  titulo: string
}

export function BannerPromocao({titulo}: BannerType) {
  return (
    <div className="containerBanner">
      <h2>{titulo}</h2>
    </div>
  )
}
