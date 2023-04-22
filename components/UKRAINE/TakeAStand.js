import classes from './TakeAStand.module.css'

const TakeAStand = () =>{
  return (
    <div className={classes.container}>
      <span>
        Stand with UKRAINE... Take a Stand 
      </span>
      <a href='https://war.ukraine.ua/support-ukraine/' className={classes.span}>
        Help Provide Humanitarian Aid to Ukraine
      </a>
    </div>
  )
}

export default TakeAStand