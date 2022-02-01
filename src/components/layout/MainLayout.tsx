import STYLE from './MainLayout.module.scss' // suffix with "?module"

export interface MainLayoutInterface {
  cssClass?: string
}

export const MainLayout = (args: MainLayoutInterface, {slots}: any) => {
  const classes = `${args.cssClass} ${STYLE.main}`
    return (
      <div className={classes}>
          {slots.default()}
      </div>
    ) 
}
