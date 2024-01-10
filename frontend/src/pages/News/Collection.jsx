import { blog1, blog2, blog3 } from '../../assets'
import styles from '../../style'

const Collection = () => {
  return (
    <div className={`${styles.boxWidth} ${styles.paddingY}`}>
      <div className='flex items-start gap-5'>
        <div className='flex-[2]'>
          <img src={blog1} alt="blog image 1" />
          <div className='flex items-center py-5 gap-3'>
            <span className='font-medium text-[0.9rem] text-gray-500'>COLLECTION --- </span>
            <span className='text-[0.8rem] text-gray-500'>April25, 2022</span>
          </div>
          <h1 className='pb-5 text-[2.2rem] font-medium'>The Best Products That Shape Fashion</h1>
          <div className='text-[0.9rem] flex flex-col gap-4 text-gray-500'>
            <p>
            Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices, vitae sollicitudin quam facilisis. Vivamus rutrum urna non ligula tempor aliquet. Fusce tincidunt est magna, id malesuada massa imperdiet ut. Nunc non nisi urna. Nam consequat est nec turpis eleifend ornare. Vestibulum eu justo lobortis mauris commodo efficitur. Nunc pulvinar pulvinar cursus.
            </p>
            <p>
            Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae dapibus tempor.
            </p>

            <div className='text-[0.85rem] p-10 border-l-[4px] border-gray-300 '>
              <p>Aliquam purus enim, fringilla vel nunc imperdiet, consequat ultricies massa. Praesent sed turpis sollicitudin, dignissim justo vel, fringilla mi.</p>
            </div>

            <p>Vivamus libero leo, tincidunt eget lectus rhoncus, finibus interdum neque. Curabitur aliquet dolor purus, id molestie purus elementum vitae. Sed quis aliquet eros. Morbi condimentum ornare nibh, et tincidunt ante interdum facilisis. Praesent sagittis tortor et felis finibus vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dapibus turpis sit amet turpis tincidunt, sit amet mollis turpis suscipit. Proin arcu diam, pretium nec tempus eu, feugiat non ex.</p>
            <p>
            Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae dapibus tempor.
            </p>
            <p>
            Donec feugiat tincidunt eros, ac aliquam purus egestas condimentum. Curabitur imperdiet at leo pellentesque mattis. Fusce a dignissim est. In enim nisi, hendrerit placerat nunc quis, porttitor lobortis neque. Donec nec nulla arcu. Proin felis augue, volutpat ac nunc a, semper egestas dolor. Sed varius magna non lacus viverra, at dapibus sem interdum. Proin urna nibh, maximus nec interdum ut, hendrerit et arcu. Nunc venenatis eget nulla at tempor. Duis sed tellus placerat, bibendum felis quis, efficitur nisi. Morbi porta placerat urna et pharetra. Proin condimentum, libero ac feugiat efficitur, est orci consectetur sapien, a pretium leo leo in elit. Quisque fringilla finibus arcu, pretium posuere urna posuere sit amet. Nullam quis sapien a augue aliquet accumsan eget eu risus. Ut at mi sed velit condimentum porta. Proin vestibulum congue ullamcorper.
            </p>
            <p>
            Nunc blandit ligula mi, quis commodo dolor fermentum sit amet. Nam vehicula pharetra lacus a vulputate. Duis pulvinar vestibulum dolor, vel commodo arcu laoreet ac. Vestibulum sed consequat purus, vitae auctor metus. Duis ut aliquet odio, at tincidunt nunc. Vestibulum dignissim aliquet orci, rutrum malesuada ipsum facilisis vel. Morbi tempor dignissim nisi. Maecenas scelerisque maximus justo eget sodales. Sed finibus consectetur vulputate. Pellentesque id pellentesque nulla. Sed ut viverra eros. Vestibulum ut ligula quam.
            </p>
          </div>
        </div>

        <div className='flex-1'>
          hmm
        </div>
      </div>
    </div>
  )
}

export default Collection
