import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { InvisibleReCaptchaComponent } from 'ngx-captcha';
import { environment } from '../../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  @ViewChild('captchaElem')
  captchaElem: InvisibleReCaptchaComponent;
  public readonly siteKey = environment.siteKey;
  public recaptcha: any = null;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaResponse?: string;
  public captchaIsReady = false;
  public badge: 'bottomright' | 'bottomleft' | 'inline' = 'inline';
  public type: 'image' | 'audio';

  contactForm: FormGroup;
  iscontactFormSubmitted = false;

  constructor(private titleService: Title, private meta: Meta,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private cdr: ChangeDetectorRef,
              private contactService: ContactService) {
    window.scrollTo(0, 0);
    ToastrModule.forRoot();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.setHeader(
      'We are a leading Manufacturer and Exporters of Stainless Wire Mesh, Barb Wire Fence, Stainless Welded Wire Mesh, ' +
      'Chain Link Fences, Wire Mesh Fence, Gabion, Razor Wire, Security Fencing System, Vibrating Screens and related wire products.',
      'Weld Tech Industries',
      'Contact - Weld Tech Industries'
    );
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.formBuilder.group({
      userName: [null, Validators.required],
      Email: [null, Validators.compose([Validators.required, Validators.pattern(
        '^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}$')])],
      Subject: [null, Validators.required],
      Message: [null, Validators.required],
      recaptcha: [null]
    });
  }

  onSubmitContactForm() {
    this.iscontactFormSubmitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.captchaElem.execute();
    setTimeout(() => {
      const captchaResponse = this.captchaElem.getResponse();
      const userName = this.contactForm.controls.userName.value;
      const email = this.contactForm.controls.Email.value;
      const subject = this.contactForm.controls.Subject.value;
      const message = this.contactForm.controls.Message.value;

      document.getElementById('btnSubmitContact').innerText = 'Sending...';

      this.contactService.sendContact(userName, email, subject, message, captchaResponse).subscribe(data => {
        this.captchaElem.resetCaptcha();
        document.getElementById('btnSubmitContact').innerText = 'Submit';
        if (data.success === true) {
          this.iscontactFormSubmitted = false;
          this.contactForm.reset();
          this.toastr.success(data.message, '');
        } else {
          this.toastr.error(data.message, '');
        }
      }, error => {
        this.captchaElem.resetCaptcha();
        this.iscontactFormSubmitted = false;
        document.getElementById('btnSubmitContact').innerText = 'Submit';
        if (error.status === 0) {
          this.toastr.error('Internal Server Error !');
        } else {
          this.toastr.error('Something went wrong. Please try again.', '');
        }
      });
    }, 1000);
  }

  setHeader(desc: string, keywords: string, title: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'og:title', content: title });
    this.meta.updateTag({ name: 'og:description', content: desc });
  }

}
