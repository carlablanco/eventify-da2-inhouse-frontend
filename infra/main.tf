provider "aws" {
  region = "us-east-1"
}

data "aws_ecr_repository" "existing" {
  count = length(data.aws_ecr_repositories.all.repositories) > 0 ? 1 : 0
  repository_name = "frontend-repo"
}

resource "aws_ecr_repository" "ecr_repo" {
  count = data.aws_ecr_repository.existing.count == 0 ? 1 : 0
  name = "frontend-repo"

  image_scanning_configuration {
    scan_on_push = true
  }
}

output "repository_url" {
  value = aws_ecr_repository.ecr_repo[0].repository_url
}
