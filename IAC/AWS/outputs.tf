
output "testing_site_url" {
    value = "http://${aws_s3_bucket.test_site_bucket_name.website_endpoint}"
}

output "production_site_url" {
    value = "https://${var.prod_site_bucket_name}"
}
