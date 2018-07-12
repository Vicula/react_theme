import React from 'react';

const FooterForm = () => (
  <div className="formBox">

				<section className="holder">
					<p>Join our mailing list to receive updates</p>
					<form action="//drinknavyhill.us15.list-manage.com/subscribe/post?u=5b3575d2d76b5caa88fe3434f&amp;id=49b3cefd17" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
						<input type="email" placeholder="Email Address" name="EMAIL" className="input email" id="mce-EMAIL" required />
            <div style={{position: absolute, left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_5b3575d2d76b5caa88fe3434f_49b3cefd17" tabindex="-1" value="" />
            </div>
            <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" class="formBtn"/>
					</form>
				</section>
			</div>

);

export default FooterForm;
