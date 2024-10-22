provider "aws" {
  region = "us-east-1"
}

# Repositorio ECR
resource "aws_ecr_repository" "ecr_repo" {
  name = "frontend-repo"
  image_scanning_configuration {
    scan_on_push = true
  }
}

# Output del URL del repositorio ECR
output "repository_url" {
  value = aws_ecr_repository.ecr_repo.repository_url
}
