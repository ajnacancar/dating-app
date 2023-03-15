FROM mcr.microsoft.com/dotnet/sdk:6.0.406 AS build-env
WORKDIR /app
EXPOSE 8080

#copy csproj and restore
COPY *.csproj ./
RUN dotnet restore

#copy everything
COPY . ./
RUN dotnet publish -c Release -o out

#build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0.14 
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "API.dll" ]


