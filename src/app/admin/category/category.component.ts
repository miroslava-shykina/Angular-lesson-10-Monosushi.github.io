import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategoryResponse } from 'src/app/shared/interfaces/category/category.interface';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ImageService } from 'src/app/shared/services/image/image.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public adminCategories: Array<ICategoryResponse> = [];
  public isAddet = true;
  public editStatus = false;
  public categoryForm!: FormGroup;
  public uploadPercent!: number;
  public isUploaded = false;
  private currentCategoryId = 0;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.initCategoryForm();
    this.loadCategories();
  }

  initCategoryForm(): void {
    this.categoryForm = this.fb.group({
      name: [null, Validators.required],
      path: [null, Validators.required],
      imagePath: [null, Validators.required],
    });
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.adminCategories = data;
    });
  }

  addCategory(): void {
    if (this.editStatus) {
      this.categoryService
        .update(this.categoryForm.value, this.currentCategoryId)
        .subscribe(() => {
          this.loadCategories();
        });
    } else {
      this.categoryService.create(this.categoryForm.value).subscribe(() => {
        this.loadCategories();
      });
    }
    this.isAddet = true;
    this.categoryForm.reset();
    this.editStatus = false;
    this.isUploaded = false;
    this.uploadPercent = 0;
  }

  editCategory(category: ICategoryResponse): void {
    this.categoryForm.patchValue({
      name: category.name,
      path: category.path,
      imagePath: category.imagePath,
      
    });
    this.currentCategoryId = category.id;
    this.editStatus = true;
    this.isAddet = false;
    this.isUploaded = true;
  }

  deleteCategory(category: ICategoryResponse): void {
    this.categoryService.delete(category.id).subscribe(() => {
      this.loadCategories();
    });
  }

  upload(event: any): void {
    const file = event.target.files[0];
    this.imageService
      .uploadFile('images', file.name, file)
      .then((data) => {
        this.categoryForm.patchValue({
          imagePath: data,
        });
        this.isUploaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  valueByControl(control: string): string {
    return this.categoryForm.get(control)?.value;
  }

  deleteImage(): void {
    this.imageService
      .deleteUploadFile(this.valueByControl('imagePath'))
      .then(() => {
        this.isUploaded = false;
        this.uploadPercent = 0;
        this.categoryForm.patchValue({ imagePath: null });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  
  adding(): void {
    this.isAddet =!this.isAddet;
  if(this.isAddet === true){
    this.categoryForm.reset();
  }}
}
