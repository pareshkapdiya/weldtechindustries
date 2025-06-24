import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvisibleReCaptchaComponent } from 'ngx-captcha';
import { environment } from 'src/environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ContactService } from '../../services/contact.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  @ViewChild('captchaElem')
  captchaElem: InvisibleReCaptchaComponent;
  public readonly siteKey = environment.siteKey;
  public recaptcha: any = null;

  public countrylist = environment.config.country_list;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaResponse?: string;
  public captchaIsReady = false;

  public badge: 'bottomright' | 'bottomleft' | 'inline' = 'inline';
  public type: 'image' | 'audio';

  enquiryForm: FormGroup;
  isEnquiryFormSubmitted = false;

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef,
              private titleService: Title, private meta: Meta, private contactService: ContactService) {
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
      'Enquiry - Weld Tech Industries'
    );
    this.initEnquiryForm();
  }

  setHeader(desc: string, keywords: string, title: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'og:title', content: title });
    this.meta.updateTag({ name: 'og:description', content: desc });
  }

  initEnquiryForm() {
    this.enquiryForm = this.formBuilder.group({
      userName: [null, Validators.required],
      companyName: [null, Validators.required],
      country: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern(
        '^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}$')])],
      pnumber: [null],
      mnumber: [null, Validators.required],
      fax: [null],
      note: [null],
      recaptcha: [null]
    });
  }

  sendMessage() {
    this.isEnquiryFormSubmitted = true;
    if (this.enquiryForm.invalid) {
      return;
    }
    this.captchaElem.execute();
    setTimeout(() => {
      const captchaResponse = this.captchaElem.getResponse();

      const userName = this.enquiryForm.controls.userName.value;
      const companyName = this.enquiryForm.controls.companyName.value;
      const country = this.enquiryForm.controls.country.value;
      const email = this.enquiryForm.controls.email.value;
      const pnumber = this.enquiryForm.controls.pnumber.value;
      const mnumber = this.enquiryForm.controls.mnumber.value;
      const fax = this.enquiryForm.controls.fax.value;
      const note = this.enquiryForm.controls.note.value;

      document.getElementById('btnSendMessage').innerText = 'Sending...';

      this.contactService.sendEnquiry(userName, companyName, country.name, email,
        pnumber, mnumber, fax, note, captchaResponse).subscribe(data => {
        this.captchaElem.resetCaptcha();
        document.getElementById('btnSendMessage').innerText = 'Send Message';
        if (data.success === true) {
          this.isEnquiryFormSubmitted = false;
          this.enquiryForm.reset();
          this.toastr.success(data.message, '');
        } else {
          this.toastr.error(data.message, '');
        }
      }, error => {
        this.captchaElem.resetCaptcha();
        this.isEnquiryFormSubmitted = false;
        document.getElementById('btnSendMessage').innerText = 'Send Message';
        if (error.status === 0) {
          this.toastr.error('Internal Server Error !');
        } else {
          this.toastr.error('Something went wrong. Please try again.', '');
        }
      });
    }, 3000);
  }

}
