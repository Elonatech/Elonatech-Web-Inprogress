import gc from './captions/hero-img.svg';
import ds from './captions/2255417.jpg'
import dr from './captions/7085623.jpg'

const Seo = () => {
    return (
 <>
   <section class="mt-5 bg-dark ">
      <div class="container" >
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4" style={{marginTop:"100px"}}>
              <h2 class="text-white">We Provides Round-The-Clock Maintenance for All Network Equipment</h2>
              <p  class="text-white pt-2">We Provides Round-The-Clock Maintenance for All Network Equipment</p>
              <p  class="text-white pt-2">we are committed to supplying you with the most reliable advice,
                             support and services at all times, wherever you are in Nigeria.</p>
              <p class="mb-0 pt-2"><a href="#" class="btn btn-success py-3 px-4">Contact Us</a></p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 d-flex align-items-end">
             <img src={gc} class="img-fluid mb-4" alt=""/> 
          </div>
        </div>
      </div>
</section>   

{/* body */}

<section class="sample-text-area mt-5">
			<div class="container box_1170">
				<h3 class="text-heading">Text Sample</h3>
				<p class="sample-text">
					Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary,
					or short
					film to show off their creative prowess. Many have great ideas and want to “wow”
					the<sup>Superscript</sup> scene,
					or video renters with their big project. But once you have the<sub>Subscript</sub> “in the can” (no easy
					feat), how
					do you move from a <del>Strike</del> through of master DVDs with the <u>“Underline”</u> marked
					hand-written title
					inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC
					barcodes
					and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project
					replicated.
					Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is
					certainly a
					helpful option to ensure a professional end result, but to help with your DVD replication project, here
					are 4 easy
					steps to follow for good DVD replication results:
	
				</p>
			</div>
</section>

{/* End */}


<div class="section-top-border">
                    <div className="container">
					<h3 class="mb-30">Left Aligned</h3>
					<div class="row">
						<div class="col-md-6">
							<img src={ds} alt="" class="img-fluid"/>
						</div>
						<div class="col-md-6 mt-sm-20">
							<p>Recently, the US Federal government banned online casinos from operating in America by making
								it illegal to
								transfer money to them through any US bank or payment system. As a result of this law, most
								of the popular
								online casino networks such as Party Gaming and PlayTech left the United States. Overnight,
								online casino
								players found themselves being chased by the Federal government. But, after a fortnight, the
								online casino
								industry came up with a solution and new online casinos started taking root. These began to
								operate under a
								different business umbrella, and by doing that, rendered the transfer of money to and from
								them legal. A major
								part of this was enlisting electronic banking systems that would accept this new
								clarification and start doing
								business with me. Listed in this article are the electronic banking systems that accept
								players from the United
								States that wish to play in online casinos.</p>
						</div>
					</div>
                    </div>
				</div>
				<div class="section-top-border text-right">
                    <div className="container">
					<h3 class="mb-30">Right Aligned</h3>
					<div class="row">
						<div class="col-md-9">
							<p class="text-right">Over time, even the most sophisticated, memory packed computer can begin
								to run slow if we
								don’t do something to prevent it. The reason why has less to do with how computers are made
								and how they age and
								more to do with the way we use them. You see, all of the daily tasks that we do on our PC
								from running programs
								to downloading and deleting software can make our computer sluggish. To keep this from
								happening, you need to
								understand the reasons why your PC is getting slower and do something to keep your PC
								running at its best. You
								can do this through regular maintenance and PC performance optimization programs</p>
							<p class="text-right">Before we discuss all of the things that could be affecting your PC’s
								performance, let’s
								talk a little about what symptoms</p>
						</div>
						<div class="col-md-3">
							<img src={dr} alt="" class="img-fluid"/>
						</div>
                        </div>
					</div>
				</div>



</>
    );
}

export default Seo;
